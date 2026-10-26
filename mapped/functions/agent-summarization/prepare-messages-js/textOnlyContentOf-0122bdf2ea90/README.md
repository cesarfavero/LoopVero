# `textOnlyContentOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/prepare-messages.js` · [README do módulo](../../../../modules/agent-summarization/prepare-messages-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620540-620554](../../../../../reference/runtime/host-main.cjs#L620540-L620554) | `FunctionDeclaration` | não | `content` |
| [evaluation:304894-304908](../../../../../reference/runtime/sand-eval-runner.cjs#L304894-L304908) | `FunctionDeclaration` | não | `content` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620540-620554](../../../../../reference/runtime/host-main.cjs#L620540-L620554) | 3 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:304894-304908](../../../../../reference/runtime/sand-eval-runner.cjs#L304894-L304908) | 3 | 1 | 0 | 4 | 0 | 0 |

### host:620540

Chamadas escritas diretamente neste corpo: `Array.isArray`, `plainTextOf`.

Alvos de atribuição ou incremento: `text3`.

SHA-256 do trecho: `b5f1faf2642e806d3d77995238c386c863c3b3e2c3481d606b0dea974b8f5e8f`.

### evaluation:304894

Chamadas escritas diretamente neste corpo: `Array.isArray`, `plainTextOf`.

Alvos de atribuição ou incremento: `text3`.

SHA-256 do trecho: `013ac0772597e57b62f4ccf1536b6b09b02fa2a088fdbd29b67f63e74d0790c4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
