# `reportHostDiagnosticOrStderr`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/observability/README.md).

**Módulo:** `core/host-diagnostics.ts` · [README do módulo](../../../../modules/core/host-diagnostics-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:430749-430763](../../../../../reference/runtime/host-main.cjs#L430749-L430763) | `FunctionDeclaration` | não | `diagnostic` |
| [evaluation:479621-479635](../../../../../reference/runtime/sand-eval-runner.cjs#L479621-L479635) | `FunctionDeclaration` | não | `diagnostic` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430749-430763](../../../../../reference/runtime/host-main.cjs#L430749-L430763) | 1 | 0 | 0 | 1 | 0 | 1 |
| [evaluation:479621-479635](../../../../../reference/runtime/sand-eval-runner.cjs#L479621-L479635) | 1 | 0 | 0 | 1 | 0 | 1 |

### host:430749

Chamadas escritas diretamente neste corpo: `errorLogTag`, `hostDiagnosticLine`, `pinnedReporter`, `process.stderr.write`.

SHA-256 do trecho: `876ae8d03f5676e0e4afb7aa405cf8f42f3b9393b073544ead8cce1b4b8cdd7d`.

### evaluation:479621

Chamadas escritas diretamente neste corpo: `errorLogTag`, `hostDiagnosticLine`, `pinnedReporter`, `process.stderr.write`.

SHA-256 do trecho: `876ae8d03f5676e0e4afb7aa405cf8f42f3b9393b073544ead8cce1b4b8cdd7d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
