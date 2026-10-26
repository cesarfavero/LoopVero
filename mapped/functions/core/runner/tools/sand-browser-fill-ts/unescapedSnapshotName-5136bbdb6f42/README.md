# `unescapedSnapshotName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727040-727050](../../../../../../../reference/runtime/host-main.cjs#L727040-L727050) | `FunctionDeclaration` | não | `line` |
| [evaluation:561651-561661](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561651-L561661) | `FunctionDeclaration` | não | `line` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727040-727050](../../../../../../../reference/runtime/host-main.cjs#L727040-L727050) | 3 | 0 | 0 | 3 | 1 | 1 |
| [evaluation:561651-561661](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561651-L561661) | 3 | 0 | 0 | 3 | 1 | 1 |

### host:727040

Chamadas escritas diretamente neste corpo: `JSON.parse`, `SNAPSHOT_LINE_NAME_PATTERN.exec`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `0a2e74bd86632953af0460b7a982205829a0de153e148dc73f395b4791d1c4f4`.

### evaluation:561651

Chamadas escritas diretamente neste corpo: `JSON.parse`, `SNAPSHOT_LINE_NAME_PATTERN.exec`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `d768b033a3d828938e670a47a48d6435257cc705dfdc0e9099bef55b9743807a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
