# `refineShipment`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:741530-741554](../../../../../../../reference/runtime/host-main.cjs#L741530-L741554) | `FunctionDeclaration` | não | `value, ctx` |
| [evaluation:482477-482501](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482477-L482501) | `FunctionDeclaration` | não | `value, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741530-741554](../../../../../../../reference/runtime/host-main.cjs#L741530-L741554) | 3 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:482477-482501](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482477-L482501) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:741530

Chamadas escritas diretamente neste corpo: `ctx.addIssue`, `isFieldProvided`.

SHA-256 do trecho: `b3c26e6dc6c96f54279848186882fa9dda1119b2c9f952fea63d7c4d5cf0bcc5`.

### evaluation:482477

Chamadas escritas diretamente neste corpo: `ctx.addIssue`, `isFieldProvided`.

SHA-256 do trecho: `dcf34072369f84e017771fa0238198c0ca751e3792d97e36c114b1c0f7ba1302`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
