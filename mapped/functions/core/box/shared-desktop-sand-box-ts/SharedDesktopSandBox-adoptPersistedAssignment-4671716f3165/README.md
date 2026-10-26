# `SharedDesktopSandBox.adoptPersistedAssignment`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554649-554673](../../../../../../reference/runtime/host-main.cjs#L554649-L554673) | `method` | sim | `ctx, agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554649-554673](../../../../../../reference/runtime/host-main.cjs#L554649-L554673) | 5 | 0 | 1 | 5 | 0 | 0 |

### host:554649

Chamadas escritas diretamente neste corpo: `loaded.assignments.get`, `loaded.tokens.get`, `this.agentWindowTokens.delete`, `this.agentWindowTokens.get`, `this.agentWindowTokens.set`, `this.agentWindows.get`, `this.agentWindows.set`, `this.clearWindowForAdoption`, `this.downForks.delete`, `this.establishedForks.delete`, `this.followUnstartedToken`, `this.readPersistedAssignments`, `this.unstartedSeats.delete`.

SHA-256 do trecho: `14b801019528f4c65de059f09f18f7b3876114a18aec5491de06117694064b85`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
