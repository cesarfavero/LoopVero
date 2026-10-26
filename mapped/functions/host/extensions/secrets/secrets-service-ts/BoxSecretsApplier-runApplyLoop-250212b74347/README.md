# `BoxSecretsApplier.runApplyLoop`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/secrets/secrets-service.ts` · [README do módulo](../../../../../../modules/host/extensions/secrets/secrets-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:709219-709258](../../../../../../../reference/runtime/host-main.cjs#L709219-L709258) | `method` | sim | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709219-709258](../../../../../../../reference/runtime/host-main.cjs#L709219-L709258) | 3 | 1 | 2 | 3 | 1 | 2 |

### host:709219

Chamadas escritas diretamente neste corpo: `Date.now`, `buildBoxSecretsEnv`, `effectiveBoxSecrets`, `retry2.dispose`, `this.applyToBox`, `this.log`, `this.notifyApplied`, `this.retryPolicy.schedule`.

Alvos de atribuição ou incremento: `attempt`, `this.appliedGeneration`, `this.isApplying`, `this.isStopped`, `this.lastAppliedAtMs`.

Alvos de lançamento explícito: `error65`.

SHA-256 do trecho: `e59c68305cbfaf6e50a388bc0351e12fa71d2612510582d2d9ca3d8b8dd67997`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
