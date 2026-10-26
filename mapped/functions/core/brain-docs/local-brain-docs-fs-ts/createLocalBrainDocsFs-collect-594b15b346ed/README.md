# `createLocalBrainDocsFs/collect`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/brain-docs/local-brain-docs-fs.ts` · [README do módulo](../../../../../modules/core/brain-docs/local-brain-docs-fs-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:784753-784758](../../../../../../reference/runtime/host-main.cjs#L784753-L784758) | `FunctionDeclaration` | sim | `root, out` |
| [evaluation:630150-630155](../../../../../../reference/runtime/sand-eval-runner.cjs#L630150-L630155) | `FunctionDeclaration` | sim | `root, out` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784753-784758](../../../../../../reference/runtime/host-main.cjs#L784753-L784758) | 3 | 0 | 3 | 1 | 0 | 0 |
| [evaluation:630150-630155](../../../../../../reference/runtime/sand-eval-runner.cjs#L630150-L630155) | 3 | 0 | 3 | 1 | 0 | 0 |

### host:784753

Chamadas escritas diretamente neste corpo: `collectDirectory`, `collectFile`, `info2.isDirectory`, `info2.isFile`, `statIfPresent`.

SHA-256 do trecho: `1f2845c74e677b40749ba60673d61ac58623dfc9e2ea3ebeba0aeb6b6782a25e`.

### evaluation:630150

Chamadas escritas diretamente neste corpo: `collectDirectory`, `collectFile`, `info2.isDirectory`, `info2.isFile`, `statIfPresent`.

SHA-256 do trecho: `1f2845c74e677b40749ba60673d61ac58623dfc9e2ea3ebeba0aeb6b6782a25e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
