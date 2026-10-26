# `memoryStateArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/split-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771655-771685](../../../../../../../../reference/runtime/host-main.cjs#L771655-L771685) | `FunctionDeclaration` | não | `args, deps, memoryTypes` |
| [evaluation:570888-570918](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570888-L570918) | `FunctionDeclaration` | não | `args, deps, memoryTypes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771655-771685](../../../../../../../../reference/runtime/host-main.cjs#L771655-L771685) | 5 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:570888-570918](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570888-L570918) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:771655

Chamadas escritas diretamente neste corpo: `isTeamBot`, `memoryTypeTarget`, `memoryTypes.find`.

SHA-256 do trecho: `1b39eb01b9c645a21c6cb48fb9408238680ad3482208810c0bd36d1ece19f5d0`.

### evaluation:570888

Chamadas escritas diretamente neste corpo: `isTeamBot`, `memoryTypeTarget`, `memoryTypes.find`.

SHA-256 do trecho: `1b39eb01b9c645a21c6cb48fb9408238680ad3482208810c0bd36d1ece19f5d0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
