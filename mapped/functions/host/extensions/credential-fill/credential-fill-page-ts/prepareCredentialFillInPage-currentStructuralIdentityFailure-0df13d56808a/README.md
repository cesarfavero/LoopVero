# `prepareCredentialFillInPage/currentStructuralIdentityFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-fill/credential-fill-page.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-fill/credential-fill-page-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:543758-543814](../../../../../../../reference/runtime/host-main.cjs#L543758-L543814) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543758-543814](../../../../../../../reference/runtime/host-main.cjs#L543758-L543814) | 16 | 0 | 0 | 13 | 0 | 0 |

### host:543758

Chamadas escritas diretamente neste corpo: `.includes`, `.toLowerCase`, `autocompleteTokens`, `boundControlIsEligible`, `collectInputs`, `currentPageMatches`, `formActionAllowed`, `frameIsActive`, `hasVisiblePasswordControl`, `inputs.filter`, `oneTimeCodeControlsIntact`, `owningForm`, `password.type.toLowerCase`, `resolveUsername`, `username.type.toLowerCase`, `username.value.trim`, `writtenControls.get`, `writtenUsername.value.trim`.

SHA-256 do trecho: `883093b14914738b4d39dedacbb35fb23bb1f29f43c39bb46d72ba1df1516346`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
