# `describeCopy`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/team/sand-team-conversion-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/team/sand-team-conversion-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781569-781584](../../../../../../../../reference/runtime/host-main.cjs#L781569-L781584) | `FunctionDeclaration` | não | `outcome` |
| [evaluation:581916-581931](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581916-L581931) | `FunctionDeclaration` | não | `outcome` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781569-781584](../../../../../../../../reference/runtime/host-main.cjs#L781569-L781584) | 7 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:581916-581931](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581916-L581931) | 7 | 0 | 0 | 5 | 0 | 0 |

### host:781569

Chamadas escritas diretamente neste corpo: `.join`, `outcome.blockers.map`, `refusal2`.

SHA-256 do trecho: `8dfee51752a1876d0bbd52fec1891a3c548edc529a0a64b765f05f88e0241342`.

### evaluation:581916

Chamadas escritas diretamente neste corpo: `.join`, `outcome.blockers.map`, `refusal2`.

SHA-256 do trecho: `8dfee51752a1876d0bbd52fec1891a3c548edc529a0a64b765f05f88e0241342`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
