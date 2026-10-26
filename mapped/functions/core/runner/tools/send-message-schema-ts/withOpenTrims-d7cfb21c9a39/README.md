# `withOpenTrims`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742080-742085](../../../../../../../reference/runtime/host-main.cjs#L742080-L742085) | `FunctionDeclaration` | não | `schema3` |
| [evaluation:483027-483032](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483027-L483032) | `FunctionDeclaration` | não | `schema3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742080-742085](../../../../../../../reference/runtime/host-main.cjs#L742080-L742085) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:483027-483032](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483027-L483032) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742080

Chamadas escritas diretamente neste corpo: `schema3.shape.images.describe`.

SHA-256 do trecho: `fc47f42c67c556c87e9c100d0c6e897f47975c5502bc4660596761725fac8a9c`.

### evaluation:483027

Chamadas escritas diretamente neste corpo: `schema3.shape.images.describe`.

SHA-256 do trecho: `fc47f42c67c556c87e9c100d0c6e897f47975c5502bc4660596761725fac8a9c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
