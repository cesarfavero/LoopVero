# `renderTranscriptFilePage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/tools/transcript-search/transcript-search-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/transcript-search/transcript-search-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771391-771416](../../../../../../../../reference/runtime/host-main.cjs#L771391-L771416) | `FunctionDeclaration` | não | `args` |
| [evaluation:570625-570650](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570625-L570650) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771391-771416](../../../../../../../../reference/runtime/host-main.cjs#L771391-L771416) | 4 | 1 | 0 | 1 | 1 | 0 |
| [evaluation:570625-570650](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570625-L570650) | 4 | 1 | 0 | 1 | 1 | 0 |

### host:771391

Chamadas escritas diretamente neste corpo: `.join`, `String`, `args.text.split`, `lines2.at`, `lines2.pop`, `new SandModelVisibleError`, `page.push`.

Alvos de atribuição ou incremento: `budget`, `number6`.

Alvos de lançamento explícito: `SandModelVisibleError`.

SHA-256 do trecho: `6fafbdc9db5f1a25dc2b28a8263a147b11328c1e646c188d22c903a68f7e7808`.

### evaluation:570625

Chamadas escritas diretamente neste corpo: `.join`, `String`, `args.text.split`, `lines2.at`, `lines2.pop`, `new SandModelVisibleError`, `page.push`.

Alvos de atribuição ou incremento: `budget`, `number6`.

Alvos de lançamento explícito: `SandModelVisibleError`.

SHA-256 do trecho: `6fafbdc9db5f1a25dc2b28a8263a147b11328c1e646c188d22c903a68f7e7808`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
