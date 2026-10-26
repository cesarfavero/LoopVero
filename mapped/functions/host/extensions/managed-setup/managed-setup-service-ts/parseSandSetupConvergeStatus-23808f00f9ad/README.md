# `parseSandSetupConvergeStatus`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/managed-setup/managed-setup-service.ts` · [README do módulo](../../../../../../modules/host/extensions/managed-setup/managed-setup-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:683770-683793](../../../../../../../reference/runtime/host-main.cjs#L683770-L683793) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683770-683793](../../../../../../../reference/runtime/host-main.cjs#L683770-L683793) | 3 | 2 | 0 | 4 | 0 | 1 |

### host:683770

Chamadas escritas diretamente neste corpo: `Date.parse`, `JSON.parse`, `Math.min`, `Number.isNaN`, `convergeStatusSchema.safeParse`.

Alvos de atribuição ou incremento: `failedEntries`, `parsed2`.

SHA-256 do trecho: `b8ca5e717704f94ccccbc5064d34976029287c5bc0805481a9eba987407405c0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
