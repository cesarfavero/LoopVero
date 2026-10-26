# `discoverMatchingTargets`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `host/extensions/credential-provider/browser-credential-filler.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:547126-547146](../../../../../../../reference/runtime/host-main.cjs#L547126-L547146) | `FunctionDeclaration` | sim | `item, windowIndex, reportFailure` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547126-547146](../../../../../../../reference/runtime/host-main.cjs#L547126-L547146) | 3 | 0 | 3 | 4 | 0 | 0 |

### host:547126

Chamadas escritas diretamente neste corpo: `asyncMapValues`, `discoverMonitorPorts`, `listTargetsOnPort`, `monitorPorts.ports.filter`, `reportFailure`, `targetGroups.flatMap`.

SHA-256 do trecho: `fbff881737b246986fde15c61d224c442f64953e51937b5c21f4bd70c56b9aa1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
