# `withActTrims`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742086-742095](../../../../../../../reference/runtime/host-main.cjs#L742086-L742095) | `FunctionDeclaration` | não | `schema3` |
| [evaluation:483033-483042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483033-L483042) | `FunctionDeclaration` | não | `schema3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742086-742095](../../../../../../../reference/runtime/host-main.cjs#L742086-L742095) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:483033-483042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483033-L483042) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742086

Chamadas escritas diretamente neste corpo: `schema3.shape.alt.describe`, `schema3.shape.bcId.describe`, `schema3.shape.images.describe`, `schema3.shape.to.describe`, `schema3.shape.url.describe`.

SHA-256 do trecho: `4a943a024c14af35d80e77bf9428f802a5a1d4f404da0f6c0dd79634e755e526`.

### evaluation:483033

Chamadas escritas diretamente neste corpo: `schema3.shape.alt.describe`, `schema3.shape.bcId.describe`, `schema3.shape.images.describe`, `schema3.shape.to.describe`, `schema3.shape.url.describe`.

SHA-256 do trecho: `4a943a024c14af35d80e77bf9428f802a5a1d4f404da0f6c0dd79634e755e526`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
