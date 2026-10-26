# `discoverManagedChromeCdpPorts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/chrome-discovery.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/chrome-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705223-705247](../../../../../../../reference/runtime/host-main.cjs#L705223-L705247) | `FunctionDeclaration` | sim | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705223-705247](../../../../../../../reference/runtime/host-main.cjs#L705223-L705247) | 2 | 1 | 1 | 3 | 0 | 1 |

### host:705223

Chamadas escritas diretamente neste corpo: `.sort`, `cdpPorts.add`, `errorLogTag`, `managedChromeCdpPortOf`, `new Set`, `options2.signal.throwIfAborted`, `readChromeProcessSnapshots`.

SHA-256 do trecho: `d9c30dd694c53b369c0e40c099688666bb2b60fe10cf61cd7a01f47c63e1d5a0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
