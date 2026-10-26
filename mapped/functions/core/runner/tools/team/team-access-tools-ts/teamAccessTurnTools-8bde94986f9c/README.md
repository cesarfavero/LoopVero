# `teamAccessTurnTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/team/team-access-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/team/team-access-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781688-781713](../../../../../../../../reference/runtime/host-main.cjs#L781688-L781713) | `FunctionDeclaration` | não | `host, onSendMessage, completeTurn` |
| [evaluation:582035-582060](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582035-L582060) | `FunctionDeclaration` | não | `host, onSendMessage, completeTurn` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781688-781713](../../../../../../../../reference/runtime/host-main.cjs#L781688-L781713) | 5 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:582035-582060](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582035-L582060) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:781688

Chamadas escritas diretamente neste corpo: `createOfferSlackConnectTool`, `createOfferTeamAccessTool`, `createTeamConversionTool`, `host.gates.teamAccessCards`, `host.teamBot`.

SHA-256 do trecho: `fb2d7c99c470a217ead04f3d054806a0218470d840040e826c34c378ca811c84`.

### evaluation:582035

Chamadas escritas diretamente neste corpo: `createOfferSlackConnectTool`, `createOfferTeamAccessTool`, `createTeamConversionTool`, `host.gates.teamAccessCards`, `host.teamBot`.

SHA-256 do trecho: `fb2d7c99c470a217ead04f3d054806a0218470d840040e826c34c378ca811c84`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
