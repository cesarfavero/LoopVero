# `discoverPageTargets`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `host/extensions/credential-provider/browser-credential-filler.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:547153-547170](../../../../../../../reference/runtime/host-main.cjs#L547153-L547170) | `FunctionDeclaration` | sim | `reportFailure` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547153-547170](../../../../../../../reference/runtime/host-main.cjs#L547153-L547170) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:547153

Chamadas escritas diretamente neste corpo: `asyncMapValues`, `discoverMonitorPorts`, `targetGroups.every`, `targetGroups.flatMap`.

SHA-256 do trecho: `ec0553e8e1a1c11c81ee7f21a75934e77549d728976006b46b01fb1d02e613d6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
