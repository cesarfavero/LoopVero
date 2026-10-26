# `isToolResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:621302-621311](../../../../../reference/runtime/host-main.cjs#L621302-L621311) | `FunctionDeclaration` | não | `message` |
| [evaluation:305656-305665](../../../../../reference/runtime/sand-eval-runner.cjs#L305656-L305665) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621302-621311](../../../../../reference/runtime/host-main.cjs#L621302-L621311) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:305656-305665](../../../../../reference/runtime/sand-eval-runner.cjs#L305656-L305665) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:621302

Chamadas escritas diretamente neste corpo: `Array.isArray`, `content.some`.

SHA-256 do trecho: `05a76876adda73e9ea53ecdf824598943edd97cf41744a4d92ebadf5c7803b61`.

### evaluation:305656

Chamadas escritas diretamente neste corpo: `Array.isArray`, `content.some`.

SHA-256 do trecho: `05a76876adda73e9ea53ecdf824598943edd97cf41744a4d92ebadf5c7803b61`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
