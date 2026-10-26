# `planPackMaintenance`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-pack.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-pack-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:478622-478697](../../../../../../../reference/runtime/host-main.cjs#L478622-L478697) | `FunctionDeclaration` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478622-478697](../../../../../../../reference/runtime/host-main.cjs#L478622-L478697) | 7 | 7 | 0 | 1 | 0 | 0 |

### host:478622

Chamadas escritas diretamente neste corpo: `Math.max`, `current2.push`, `groups.map`, `groups.pop`, `groups.push`, `isLive3`, `keptPacks.push`, `lastGroup.reduce`, `new Set`, `newbies.map`, `newbies.push`, `newbies.sort`, `pack.members.every`, `packedShas.add`, `packedShas.has`, `retiredPackIds.push`, `survivorShas.has`, `survivors.map`, `survivors.push`, `survivors.sort`.

Alvos de atribuição ou incremento: `current2`, `currentBytes`, `deferredMembers`, `untouchedMax`.

SHA-256 do trecho: `bf13115f9cb9b0e2d99369c3ba37c9dfa13a428c94e9fd793385e4be161e89bf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
