# `conciseAdvertisedSendMessageParameters`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742041-742047](../../../../../../../reference/runtime/host-main.cjs#L742041-L742047) | `FunctionDeclaration` | não | `args` |
| [evaluation:482988-482994](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482988-L482994) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742041-742047](../../../../../../../reference/runtime/host-main.cjs#L742041-L742047) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:482988-482994](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482988-L482994) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:742041

Chamadas escritas diretamente neste corpo: `base.extend`, `conciseVariantTables`, `inAppVariantKey`, `schema3.extend`, `shopping.extend`, `variant.extend`.

SHA-256 do trecho: `5881fb50ab69cbd633e7fc779062eee29972a08bd5fd02211c95c4956788f156`.

### evaluation:482988

Chamadas escritas diretamente neste corpo: `base.extend`, `conciseVariantTables`, `inAppVariantKey`, `schema3.extend`, `shopping.extend`, `variant.extend`.

SHA-256 do trecho: `5881fb50ab69cbd633e7fc779062eee29972a08bd5fd02211c95c4956788f156`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
