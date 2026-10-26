# `toUserMessageImagePart`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/latest-image.js` · [README do módulo](../../../../modules/agent-summarization/latest-image-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620397-620411](../../../../../reference/runtime/host-main.cjs#L620397-L620411) | `FunctionDeclaration` | não | `part` |
| [evaluation:304751-304765](../../../../../reference/runtime/sand-eval-runner.cjs#L304751-L304765) | `FunctionDeclaration` | não | `part` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620397-620411](../../../../../reference/runtime/host-main.cjs#L620397-L620411) | 4 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:304751-304765](../../../../../reference/runtime/sand-eval-runner.cjs#L304751-L304765) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:620397

Chamadas escritas diretamente neste corpo: `DATA_OR_REMOTE_URL_PREFIX.test`, `resolveImageMimeType`.

SHA-256 do trecho: `8c7f266c87d67f13dd10c40aa52aca2671426591058ba4a8b0c997b9c62a1ddb`.

### evaluation:304751

Chamadas escritas diretamente neste corpo: `DATA_OR_REMOTE_URL_PREFIX.test`, `resolveImageMimeType`.

SHA-256 do trecho: `8c7f266c87d67f13dd10c40aa52aca2671426591058ba4a8b0c997b9c62a1ddb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
