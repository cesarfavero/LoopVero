# `memoryDescription`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/split-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771613-771620](../../../../../../../../reference/runtime/host-main.cjs#L771613-L771620) | `FunctionDeclaration` | não | `memoryTypes, teamBot, vaultContacts` |
| [evaluation:570846-570853](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570846-L570853) | `FunctionDeclaration` | não | `memoryTypes, teamBot, vaultContacts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771613-771620](../../../../../../../../reference/runtime/host-main.cjs#L771613-L771620) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570846-570853](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570846-L570853) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:771613

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `offeredMemoryTypes`.

SHA-256 do trecho: `66f84b78c3fabbfa72ad1f347c5e6ae147ab471cfd8ece6316346dd441a98aa9`.

### evaluation:570846

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `offeredMemoryTypes`.

SHA-256 do trecho: `66f84b78c3fabbfa72ad1f347c5e6ae147ab471cfd8ece6316346dd441a98aa9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
