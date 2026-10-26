# `isSandSubagentId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `shared/agents/subagents.ts` · [README do módulo](../../../../../modules/shared/agents/subagents-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:710852-710854](../../../../../../reference/runtime/host-main.cjs#L710852-L710854) | `FunctionDeclaration` | não | `id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:710852-710854](../../../../../../reference/runtime/host-main.cjs#L710852-L710854) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:710852

Chamadas escritas diretamente neste corpo: `id.startsWith`.

SHA-256 do trecho: `9581530923f25f4adcd40a7fd6bbcd85ca0af7a81541ba3592dcf87e916f2bd8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
