#!/usr/bin/env python3
"""Verify evidence hashes and documentation links without executing references."""
from pathlib import Path
import argparse
import hashlib
import json
import re
import sys
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[2]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--available', action='store_true', help='Allow originals not downloaded locally; verify every available one.')
parser.add_argument('--report', type=Path, help='Optional JSON report path outside the generated catalog.')
args = parser.parse_args()
manifest = json.loads((ROOT / 'mapped/inventory/original-files.json').read_text())
originals = {x['path']: x for x in manifest['files']}
errors = []
checked = 0
missing = []
for name, expected in originals.items():
    file = ROOT / name
    if not file.is_file():
        missing.append(name)
        continue
    data = file.read_bytes()
    sha = hashlib.sha1(b'blob ' + str(len(data)).encode() + b'\0' + data).hexdigest()
    if len(data) != expected['size'] or sha != expected['git_blob_sha1']:
        errors.append('Original differs: ' + name)
    checked += 1
if missing and not args.available:
    errors.append(str(len(missing)) + ' originals missing; use a complete checkout or explicitly --available.')

analysis = json.loads((ROOT / 'mapped/inventory/analysis.json').read_text())
line_counts = {}
for item in analysis['artifacts']:
    file = ROOT / item['path']
    if not file.is_file():
        errors.append('Analysis artifact missing: ' + item['path'])
        continue
    data = file.read_bytes()
    if hashlib.sha256(data).hexdigest() != item['sha256']:
        errors.append('Analysis SHA256 differs: ' + item['path'])
    line_counts[file.resolve()] = data.count(b'\n') + 1
    if line_counts[file.resolve()] != item['lines']:
        errors.append('LF line count differs: ' + item['path'])

docs = [ROOT / 'README.md', ROOT / 'AGENTS.md']
docs += [doc for doc in ROOT.glob('README*.md') if doc.name != 'README.md']
docs += list((ROOT / 'reference').glob('README*.md'))
docs += list((ROOT / 'guide').rglob('*.md'))
docs += list((ROOT / 'mapped').rglob('*.md'))
docs += list((ROOT / 'tools/research').glob('README*.md'))
portuguese_pages = [ROOT / 'reference/README.md', ROOT / 'tools/research/README.md']
portuguese_pages += list((ROOT / 'guide').rglob('README.md'))
portuguese_pages += list((ROOT / 'mapped').rglob('README.md'))
for original in portuguese_pages:
    translated = original.with_name('README.en.md')
    if not translated.is_file():
        errors.append('English companion missing: ' + str(translated.relative_to(ROOT)))
links = 0
source_anchors = 0
known_dirs = {str(Path(name).parent) for name in originals}
for doc in docs:
    if not doc.is_file():
        errors.append('Documentation missing: ' + str(doc.relative_to(ROOT)))
        continue
    text = doc.read_text()
    english = doc.name == 'README.en.md' or doc == ROOT / 'README.md'
    if doc.name == 'README.en.md':
        if '[English](README.en.md) · [Português (Brasil)](README.md)' not in text:
            errors.append('Language navigation missing: ' + str(doc.relative_to(ROOT)))
        if not doc.with_name('README.md').is_file():
            errors.append('Portuguese original missing: ' + str(doc.relative_to(ROOT)))
    if text.count('```') % 2:
        errors.append('Unclosed code fence: ' + str(doc.relative_to(ROOT)))
    link_text = re.sub(r'(?ms)^```[^\n]*\n.*?^```[ \t]*$', '', text)
    link_text = re.sub(r'`[^`\n]*`', '', link_text)
    for link in re.findall(r'\]\(([^\n)]+)\)', link_text):
        if re.match(r'^(?:https?:|mailto:|#)', link):
            continue
        raw_path, _, anchor = link.partition('#')
        raw_path = raw_path.strip('<>')
        target = (doc.parent / unquote(raw_path)).resolve()
        try:
            relative_path = str(target.relative_to(ROOT))
        except ValueError:
            errors.append('Link leaves repository: ' + str(doc.relative_to(ROOT)) + ' -> ' + link)
            continue
        if not target.exists() and relative_path not in originals and relative_path not in known_dirs:
            errors.append('Broken link: ' + str(doc.relative_to(ROOT)) + ' -> ' + link)
        if english and target.name == 'README.md' and target != ROOT / 'README.md':
            if not (doc.name == 'README.en.md' and link == 'README.md'):
                errors.append('English reading path links to Portuguese: ' + str(doc.relative_to(ROOT)) + ' -> ' + link)
        m = re.fullmatch(r'L(\d+)(?:-L(\d+))?', anchor)
        if m:
            source_anchors += 1
            if target in line_counts:
                start, end = int(m[1]), int(m[2] or m[1])
                if not 1 <= start <= end <= line_counts[target]:
                    errors.append('Invalid source range: ' + str(doc.relative_to(ROOT)) + ' -> ' + link)
        links += 1

function_pages = json.loads((ROOT / 'mapped/inventory/function-pages.json').read_text())
if isinstance(function_pages, dict):
    function_pages = [item for shard in function_pages['shards'] for item in json.loads((ROOT / shard['path']).read_text())]
module_pages = json.loads((ROOT / 'mapped/inventory/module-pages.json').read_text())
for item in function_pages + module_pages:
    if not (ROOT / item['readme']).is_file():
        errors.append('Catalog page missing: ' + item['readme'])

report = {
    'status': 'passed' if not errors else 'failed',
    'method': 'Static file/hash/link verification. No original bundle executed.',
    'originals_in_manifest': len(originals),
    'originals_verified_locally': checked,
    'originals_not_downloaded': len(missing),
    'analysis_artifacts_verified': len(line_counts),
    'documentation_files': len(docs),
    'bilingual_page_pairs': len(portuguese_pages),
    'english_companions': sum(doc.name == 'README.en.md' for doc in docs),
    'relative_links_checked': links,
    'source_anchors_checked': source_anchors,
    'module_readmes': len(module_pages),
    'function_readmes': len(function_pages),
    'errors': errors,
}
if args.report:
    args.report.parent.mkdir(parents=True, exist_ok=True)
    args.report.write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
print(json.dumps({**report, 'errors': errors[:30]}, ensure_ascii=False, indent=2))
sys.exit(bool(errors))
