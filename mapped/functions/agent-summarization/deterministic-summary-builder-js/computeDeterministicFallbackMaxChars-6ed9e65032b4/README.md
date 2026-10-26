# `computeDeterministicFallbackMaxChars`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/deterministic-summary-builder.js` · [README do módulo](../../../../modules/agent-summarization/deterministic-summary-builder-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:621831-621837](../../../../../reference/runtime/host-main.cjs#L621831-L621837) | `FunctionDeclaration` | não | `contextWindowTokens, windowRatio` |
| [evaluation:306185-306191](../../../../../reference/runtime/sand-eval-runner.cjs#L306185-L306191) | `FunctionDeclaration` | não | `contextWindowTokens, windowRatio` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621831-621837](../../../../../reference/runtime/host-main.cjs#L621831-L621837) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:306185-306191](../../../../../reference/runtime/sand-eval-runner.cjs#L306185-L306191) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:621831

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.max`, `Math.min`, `Number.isFinite`.

SHA-256 do trecho: `23c8832953299e9fbc1f5a82a23ef5215074f14e330c2bc0edaad3d19e06169c`.

### evaluation:306185

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.max`, `Math.min`, `Number.isFinite`.

SHA-256 do trecho: `23c8832953299e9fbc1f5a82a23ef5215074f14e330c2bc0edaad3d19e06169c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
