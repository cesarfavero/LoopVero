# `sendToUserLinkVisibility`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761154-761161](../../../../../../../reference/runtime/host-main.cjs#L761154-L761161) | `FunctionDeclaration` | não | `deps` |
| [evaluation:551969-551976](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551969-L551976) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761154-761161](../../../../../../../reference/runtime/host-main.cjs#L761154-L761161) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:551969-551976](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551969-L551976) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761154

Chamadas escritas diretamente neste corpo: `deps.boxEgressTunnel`, `deps.chromeCookieImport`, `deps.meetings`, `sandUiMapVisibility`.

SHA-256 do trecho: `4251e1cc4e47f5c3a7f987e3622406c566cc2cad688712140050b054cbd8cf4a`.

### evaluation:551969

Chamadas escritas diretamente neste corpo: `deps.boxEgressTunnel`, `deps.chromeCookieImport`, `deps.meetings`, `sandUiMapVisibility`.

SHA-256 do trecho: `4251e1cc4e47f5c3a7f987e3622406c566cc2cad688712140050b054cbd8cf4a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
