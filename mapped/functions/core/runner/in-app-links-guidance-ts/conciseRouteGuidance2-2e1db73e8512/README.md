# `conciseRouteGuidance2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/in-app-links-guidance.ts` · [README do módulo](../../../../../modules/core/runner/in-app-links-guidance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557737-557746](../../../../../../reference/runtime/host-main.cjs#L557737-L557746) | `FunctionDeclaration` | não | `taught, tabs, vault` |
| [evaluation:546173-546182](../../../../../../reference/runtime/sand-eval-runner.cjs#L546173-L546182) | `FunctionDeclaration` | não | `taught, tabs, vault` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557737-557746](../../../../../../reference/runtime/host-main.cjs#L557737-L557746) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546173-546182](../../../../../../reference/runtime/sand-eval-runner.cjs#L546173-L546182) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:557737

Chamadas escritas diretamente neste corpo: `routeTemplate2`, `tabs.join`, `taught.join`.

SHA-256 do trecho: `2f9a90bb5afe699e169bdafa1ccf9e5c0124e1aaf3e656b301509b2f65f61790`.

### evaluation:546173

Chamadas escritas diretamente neste corpo: `routeTemplate2`, `tabs.join`, `taught.join`.

SHA-256 do trecho: `2f9a90bb5afe699e169bdafa1ccf9e5c0124e1aaf3e656b301509b2f65f61790`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
