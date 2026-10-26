# `_DeletedAgentRecord.removeAgentDirs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agents/deleted-agent-record.ts` · [README do módulo](../../../../../modules/host/agents/deleted-agent-record-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:478791-478800](../../../../../../reference/runtime/host-main.cjs#L478791-L478800) | `method` | não | `agentsRootDir, log5` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478791-478800](../../../../../../reference/runtime/host-main.cjs#L478791-L478800) | 1 | 1 | 0 | 0 | 0 | 1 |

### host:478791

Chamadas escritas diretamente neste corpo: `AGENT_UUID.test`, `errorMessage`, `log5`, `removeSandDataTreeSync`.

SHA-256 do trecho: `43de78b580a3db30fd2ebb9718edcf7770d18025d916d044ef3532df5b60a9fa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
