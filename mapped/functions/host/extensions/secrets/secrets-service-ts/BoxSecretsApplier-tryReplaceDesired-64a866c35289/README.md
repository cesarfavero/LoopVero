# `BoxSecretsApplier.tryReplaceDesired`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/secrets/secrets-service.ts` · [README do módulo](../../../../../../modules/host/extensions/secrets/secrets-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:709131-709155](../../../../../../../reference/runtime/host-main.cjs#L709131-L709155) | `method` | sim | `ctx, next, expectedGeneration` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709131-709155](../../../../../../../reference/runtime/host-main.cjs#L709131-L709155) | 5 | 0 | 3 | 2 | 1 | 0 |

### host:709131

Chamadas escritas diretamente neste corpo: `.catch`, `.then`, `effectiveBoxSecrets`, `new SandBoxSecretsValidationError`, `next`, `this.applyDeadline.run`, `this.applyPersisted`, `this.getStatus`, `this.loadDesired`, `this.persistQueue.catch`, `this.runApplyLoop`, `validateBoxSecrets`.

Alvos de atribuição ou incremento: `this.desired`, `this.desiredGeneration`, `this.persistQueue`.

Alvos de lançamento explícito: `SandBoxSecretsValidationError`.

SHA-256 do trecho: `26f45133ee861cfc743b1a527b67a007974c9dff16b11cd1cb0222354d02b07f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
