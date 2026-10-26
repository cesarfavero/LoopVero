# `isSandMessageInitiator`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/send/send.ts` · [README do módulo](../../../../../modules/shared/send/send-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:487388-487390](../../../../../../reference/runtime/host-main.cjs#L487388-L487390) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487388-487390](../../../../../../reference/runtime/host-main.cjs#L487388-L487390) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:487388

Chamadas escritas diretamente neste corpo: `SAND_MESSAGE_INITIATORS.some`.

SHA-256 do trecho: `0f14885a729f1bc04a9effd91696dff94c3c3d2f3d20a38591fe14eac7075645`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
