# `profileHarnessFromJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/agents/agent-files.ts` · [README do módulo](../../../../../modules/core/agents/agent-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490828-490830](../../../../../../reference/runtime/host-main.cjs#L490828-L490830) | `FunctionDeclaration` | não | `parsed2` |
| [evaluation:629039-629041](../../../../../../reference/runtime/sand-eval-runner.cjs#L629039-L629041) | `FunctionDeclaration` | não | `parsed` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490828-490830](../../../../../../reference/runtime/host-main.cjs#L490828-L490830) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:629039-629041](../../../../../../reference/runtime/sand-eval-runner.cjs#L629039-L629041) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:490828

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `0322e929d758ede9905d06353fef6a36247e7aa33b773da5c94414fead76643b`.

### evaluation:629039

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `07e838a1eb5e731daa7630836b9f42c8ff4f8c8100ed9cc97c28da57c5e0a1fd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
