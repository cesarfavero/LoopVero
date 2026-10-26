# `managedChromeCdpPortOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/chrome-discovery.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/chrome-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705248-705273](../../../../../../../reference/runtime/host-main.cjs#L705248-L705273) | `FunctionDeclaration` | não | `process3, maxWindowIndex` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705248-705273](../../../../../../../reference/runtime/host-main.cjs#L705248-L705273) | 7 | 0 | 0 | 7 | 0 | 0 |

### host:705248

Chamadas escritas diretamente neste corpo: `/^[1-9]\d*$/.test`, `Number`, `Number.isSafeInteger`, `lastSwitchValue`, `windowIndexForProfilePath`.

SHA-256 do trecho: `c4473b2e69461a7cae221d6c2f773594916e125c78786103c68c148912353d73`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
