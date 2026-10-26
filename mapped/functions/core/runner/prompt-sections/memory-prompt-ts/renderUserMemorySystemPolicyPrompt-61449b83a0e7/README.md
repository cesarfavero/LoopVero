# `renderUserMemorySystemPolicyPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/prompt-sections/memory-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538005-538040](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538005-L538040) | `FunctionDeclaration` | não | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538005-538040](../../../../../../../reference/runtime/sand-eval-runner.cjs#L538005-L538040) | 6 | 0 | 0 | 3 | 0 | 0 |

### evaluation:538005

Chamadas escritas diretamente neste corpo: `.join`, `.trim`, `lines2.join`, `lines2.push`, `readonlyLines.join`, `readonlyLines.push`.

SHA-256 do trecho: `02b8148644ee2dae1637ffff79f7887ec05addd68b5fbe2946aeab068345c75e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
