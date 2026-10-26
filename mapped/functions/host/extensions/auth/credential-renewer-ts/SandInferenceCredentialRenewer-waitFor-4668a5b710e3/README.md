# `SandInferenceCredentialRenewer.waitFor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/auth/credential-renewer.ts` · [README do módulo](../../../../../../modules/host/extensions/auth/credential-renewer-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:454313-454350](../../../../../../../reference/runtime/host-main.cjs#L454313-L454350) | `method` | sim | `next` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454313-454350](../../../../../../../reference/runtime/host-main.cjs#L454313-L454350) | 5 | 0 | 2 | 3 | 0 | 1 |

### host:454313

Chamadas escritas diretamente neste corpo: `console.warn`, `errorLogTag`, `new Promise`, `this.options.retry.schedule`.

Alvos de atribuição ou incremento: `this.interruptWait`.

SHA-256 do trecho: `751b285462ea1dc56d749300fffdf58ac778bbf515eeb5477c13b4828ec31cad`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
