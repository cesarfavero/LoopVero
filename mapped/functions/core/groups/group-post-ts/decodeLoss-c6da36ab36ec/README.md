# `decodeLoss`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `core/groups/group-post.ts` · [README do módulo](../../../../../modules/core/groups/group-post-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:708220-708243](../../../../../../reference/runtime/host-main.cjs#L708220-L708243) | `FunctionDeclaration` | não | `input2, output2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708220-708243](../../../../../../reference/runtime/host-main.cjs#L708220-L708243) | 7 | 2 | 0 | 2 | 0 | 0 |

### host:708220

Chamadas escritas diretamente neste corpo: `.some`, `Array.isArray`, `Object.entries`, `Object.keys`, `isUnknownRecord2`, `next.output.forEach`, `pending.pop`, `pending.push`.

Alvos de atribuição ou incremento: `next`, `stripped`.

SHA-256 do trecho: `ddc228605031fd4c1435b1ba7645ce21878a62122e2356b40b17157ad344d2d8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
