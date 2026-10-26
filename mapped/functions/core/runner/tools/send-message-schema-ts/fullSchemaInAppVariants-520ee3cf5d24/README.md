# `fullSchemaInAppVariants`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742096-742098](../../../../../../../reference/runtime/host-main.cjs#L742096-L742098) | `FunctionDeclaration` | não | `schema3` |
| [evaluation:483043-483045](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483043-L483045) | `FunctionDeclaration` | não | `schema3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742096-742098](../../../../../../../reference/runtime/host-main.cjs#L742096-L742098) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:483043-483045](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483043-L483045) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742096

Chamadas escritas diretamente neste corpo: `inAppVariantsOf`, `withActTrims`, `withOpenTrims`.

SHA-256 do trecho: `8b0394d36e2ebe3a7a12dd996565bf97ad6c2acfb2e3c9d9719f67680e479994`.

### evaluation:483043

Chamadas escritas diretamente neste corpo: `inAppVariantsOf`, `withActTrims`, `withOpenTrims`.

SHA-256 do trecho: `8b0394d36e2ebe3a7a12dd996565bf97ad6c2acfb2e3c9d9719f67680e479994`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
