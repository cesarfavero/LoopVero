# `createChannelsSetupTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/channel/channel-setup-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/channel/channel-setup-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781365-781374](../../../../../../../../reference/runtime/host-main.cjs#L781365-L781374) | `FunctionDeclaration` | não | `channels, deps` |
| [evaluation:581712-581721](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581712-L581721) | `FunctionDeclaration` | não | `channels, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781365-781374](../../../../../../../../reference/runtime/host-main.cjs#L781365-L781374) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:581712-581721](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581712-L581721) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:781365

Chamadas escritas diretamente neste corpo: `channels.flatMap`.

SHA-256 do trecho: `1a9768c6def5922162afb636e3fa9bc2572bd32f656a7a192fe25c3af0c1779c`.

### evaluation:581712

Chamadas escritas diretamente neste corpo: `channels.flatMap`.

SHA-256 do trecho: `1a9768c6def5922162afb636e3fa9bc2572bd32f656a7a192fe25c3af0c1779c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
