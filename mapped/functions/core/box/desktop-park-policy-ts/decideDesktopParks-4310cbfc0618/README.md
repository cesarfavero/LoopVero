# `decideDesktopParks`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/desktop-park-policy.ts` · [README do módulo](../../../../../modules/core/box/desktop-park-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553738-553782](../../../../../../reference/runtime/host-main.cjs#L553738-L553782) | `FunctionDeclaration` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553738-553782](../../../../../../reference/runtime/host-main.cjs#L553738-L553782) | 4 | 2 | 0 | 1 | 0 | 0 |

### host:553738

Chamadas escritas diretamente neste corpo: `.map`, `.sort`, `Math.max`, `input2.seats.filter`, `isUnderMemoryPressure`, `new Set`, `parked2.has`, `parks.map`, `parks.push`, `parks.slice`, `parksToRelievePressure`.

SHA-256 do trecho: `943d4646c91082f6fccbc8f6d9a335282afa1b0d7dcdce4292ecf365171d2de0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
