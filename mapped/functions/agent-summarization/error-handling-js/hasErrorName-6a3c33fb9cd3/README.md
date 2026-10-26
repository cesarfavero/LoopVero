# `hasErrorName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/error-handling.js` · [README do módulo](../../../../modules/agent-summarization/error-handling-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620119-620126](../../../../../reference/runtime/host-main.cjs#L620119-L620126) | `FunctionDeclaration` | não | `error64, targetName` |
| [evaluation:304473-304480](../../../../../reference/runtime/sand-eval-runner.cjs#L304473-L304480) | `FunctionDeclaration` | não | `error63, targetName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620119-620126](../../../../../reference/runtime/host-main.cjs#L620119-L620126) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:304473-304480](../../../../../reference/runtime/sand-eval-runner.cjs#L304473-L304480) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:620119

Chamadas escritas diretamente neste corpo: `iterateErrorChain`.

SHA-256 do trecho: `10af3a14dae19d8735bf6132370d83bbe5d6b4f660810157f17f6582a01a5db2`.

### evaluation:304473

Chamadas escritas diretamente neste corpo: `iterateErrorChain`.

SHA-256 do trecho: `56eb31c22e7a31c108dcb5178b37d26f877067e527f06218cc98c6e683566613`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
