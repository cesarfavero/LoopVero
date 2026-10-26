# `setProfile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/split-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771856-771879](../../../../../../../../reference/runtime/host-main.cjs#L771856-L771879) | `FunctionDeclaration` | sim | `ctx, args, deps` |
| [evaluation:571089-571112](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571089-L571112) | `FunctionDeclaration` | sim | `ctx, args, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771856-771879](../../../../../../../../reference/runtime/host-main.cjs#L771856-L771879) | 4 | 0 | 2 | 3 | 0 | 0 |
| [evaluation:571089-571112](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571089-L571112) | 4 | 0 | 2 | 3 | 0 | 0 |

### host:771856

Chamadas escritas diretamente neste corpo: `.join`, `executeStateUpdate`, `renderOutcome`, `results.join`, `results.push`.

SHA-256 do trecho: `d4c0107086970263b6d485a947de1577289077377339958934be1cdfd1f6db8d`.

### evaluation:571089

Chamadas escritas diretamente neste corpo: `.join`, `executeStateUpdate`, `renderOutcome`, `results.join`, `results.push`.

SHA-256 do trecho: `d4c0107086970263b6d485a947de1577289077377339958934be1cdfd1f6db8d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
