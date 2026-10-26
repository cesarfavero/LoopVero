# `runCodeMeterMismatch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-run-code-review-report.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-run-code-review-report-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742647-742657](../../../../../../reference/runtime/host-main.cjs#L742647-L742657) | `FunctionDeclaration` | não | `tier, meter` |
| [evaluation:515310-515320](../../../../../../reference/runtime/sand-eval-runner.cjs#L515310-L515320) | `FunctionDeclaration` | não | `tier, meter` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742647-742657](../../../../../../reference/runtime/host-main.cjs#L742647-L742657) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:515310-515320](../../../../../../reference/runtime/sand-eval-runner.cjs#L515310-L515320) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:742647

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `f8009e76b1ea297344f12d1fb732713d37eb7cfbce5c9d95969ac7f74487df1a`.

### evaluation:515310

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `f8009e76b1ea297344f12d1fb732713d37eb7cfbce5c9d95969ac7f74487df1a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
