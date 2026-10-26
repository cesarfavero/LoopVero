# `detectScmProviderForRepoUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/scm-connect-cards.ts` · [README do módulo](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509198-509210](../../../../../../../reference/runtime/host-main.cjs#L509198-L509210) | `FunctionDeclaration` | não | `repoUrl, readOriginPrIdentityHosts` |
| [evaluation:556923-556935](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556923-L556935) | `FunctionDeclaration` | não | `repoUrl, readOriginPrIdentityHosts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509198-509210](../../../../../../../reference/runtime/host-main.cjs#L509198-L509210) | 7 | 0 | 0 | 8 | 0 | 0 |
| [evaluation:556923-556935](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556923-L556935) | 7 | 0 | 0 | 8 | 0 | 0 |

### host:509198

Chamadas escritas diretamente neste corpo: `.hostname.toLowerCase`, `hostname4.endsWith`, `isOriginRepoReference`, `repoUrlAsHttp`.

SHA-256 do trecho: `8a85bd53a729b6b1e24f8c9bfa5dc0f2cb4010cb2c66837268d4a283121bd55c`.

### evaluation:556923

Chamadas escritas diretamente neste corpo: `.hostname.toLowerCase`, `hostname3.endsWith`, `isOriginRepoReference`, `repoUrlAsHttp`.

SHA-256 do trecho: `db99a351943cc711c1b444d5fb308eae5202fbe667bfcc6f26ca7872f244da37`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
