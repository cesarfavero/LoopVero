# `userInfoMatchesAvailableSecrets`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640463-640468](../../../../../../reference/runtime/host-main.cjs#L640463-L640468) | `FunctionDeclaration` | não | `content, description9` |
| [evaluation:431077-431082](../../../../../../reference/runtime/sand-eval-runner.cjs#L431077-L431082) | `FunctionDeclaration` | não | `content, description9` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640463-640468](../../../../../../reference/runtime/host-main.cjs#L640463-L640468) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431077-431082](../../../../../../reference/runtime/sand-eval-runner.cjs#L431077-L431082) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:640463

Chamadas escritas diretamente neste corpo: `content.includes`, `renderAvailableSecretsSection`.

SHA-256 do trecho: `4241cc36a5e7d63f6a554cf1509e448d478c1ef3844159e4c9c656fd88c5bcd2`.

### evaluation:431077

Chamadas escritas diretamente neste corpo: `content.includes`, `renderAvailableSecretsSection`.

SHA-256 do trecho: `4241cc36a5e7d63f6a554cf1509e448d478c1ef3844159e4c9c656fd88c5bcd2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
