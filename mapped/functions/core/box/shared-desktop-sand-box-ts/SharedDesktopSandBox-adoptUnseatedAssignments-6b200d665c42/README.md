# `SharedDesktopSandBox.adoptUnseatedAssignments`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554608-554619](../../../../../../reference/runtime/host-main.cjs#L554608-L554619) | `method` | não | `loaded` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554608-554619](../../../../../../reference/runtime/host-main.cjs#L554608-L554619) | 3 | 1 | 0 | 0 | 0 | 0 |

### host:554608

Chamadas escritas diretamente neste corpo: `loaded.tokens.get`, `this.agentWindowTokens.has`, `this.agentWindowTokens.set`, `this.agentWindows.has`, `this.agentWindows.set`, `this.clearWindowForAdoption`, `this.followUnstartedToken`.

SHA-256 do trecho: `aa28201aca8a7f4fbb6d8d2c5c43d055ba6ce7aa5be621851413cb640249b19a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
