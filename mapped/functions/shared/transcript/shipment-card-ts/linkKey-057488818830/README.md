# `linkKey`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/shipment-card.ts` · [README do módulo](../../../../../modules/shared/transcript/shipment-card-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:707183-707190](../../../../../../reference/runtime/host-main.cjs#L707183-L707190) | `FunctionDeclaration` | não | `raw` |
| [evaluation:481306-481313](../../../../../../reference/runtime/sand-eval-runner.cjs#L481306-L481313) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707183-707190](../../../../../../reference/runtime/host-main.cjs#L707183-L707190) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:481306-481313](../../../../../../reference/runtime/sand-eval-runner.cjs#L481306-L481313) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:707183

Chamadas escritas diretamente neste corpo: `.replace`, `URL.canParse`, `new URL`, `raw.replace`, `url2.hostname.toLowerCase`, `url2.pathname.replace`.

SHA-256 do trecho: `1eb1a81df5c3af19c000af72441dd4ddea5a1fb755316af4685308648c74916a`.

### evaluation:481306

Chamadas escritas diretamente neste corpo: `.replace`, `URL.canParse`, `new URL`, `raw.replace`, `url2.hostname.toLowerCase`, `url2.pathname.replace`.

SHA-256 do trecho: `1eb1a81df5c3af19c000af72441dd4ddea5a1fb755316af4685308648c74916a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
