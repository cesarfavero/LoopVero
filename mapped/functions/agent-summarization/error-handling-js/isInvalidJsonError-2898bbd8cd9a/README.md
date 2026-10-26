# `isInvalidJsonError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/error-handling.js` · [README do módulo](../../../../modules/agent-summarization/error-handling-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620163-620165](../../../../../reference/runtime/host-main.cjs#L620163-L620165) | `FunctionDeclaration` | não | `error64` |
| [evaluation:304517-304519](../../../../../reference/runtime/sand-eval-runner.cjs#L304517-L304519) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620163-620165](../../../../../reference/runtime/host-main.cjs#L620163-L620165) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304517-304519](../../../../../reference/runtime/sand-eval-runner.cjs#L304517-L304519) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620163

Chamadas escritas diretamente neste corpo: `errorTextIncludes`.

SHA-256 do trecho: `74c4db4a5838e90f2c24b76c378115e75b909727f5ca7a066189a94a2cf43d7b`.

### evaluation:304517

Chamadas escritas diretamente neste corpo: `errorTextIncludes`.

SHA-256 do trecho: `eff05e5e3347ee55e33b18d293fcdb273972a43e53984437521450f54da15ab0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
