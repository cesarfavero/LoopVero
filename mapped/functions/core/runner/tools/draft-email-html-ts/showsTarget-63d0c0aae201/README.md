# `showsTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-email-html.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732559-732561](../../../../../../../reference/runtime/host-main.cjs#L732559-L732561) | `FunctionDeclaration` | não | `text3, target` |
| [evaluation:539571-539573](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539571-L539573) | `FunctionDeclaration` | não | `text3, target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732559-732561](../../../../../../../reference/runtime/host-main.cjs#L732559-L732561) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539571-539573](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539571-L539573) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:732559

Chamadas escritas diretamente neste corpo: `.replace`, `normalizedTarget`, `text3.trim`.

SHA-256 do trecho: `cec2e13ad1dd6386d7fa5d710ed48e7aacdc095ee8cfd9c1b34f8d6f37f8ae39`.

### evaluation:539571

Chamadas escritas diretamente neste corpo: `.replace`, `normalizedTarget`, `text3.trim`.

SHA-256 do trecho: `cec2e13ad1dd6386d7fa5d710ed48e7aacdc095ee8cfd9c1b34f8d6f37f8ae39`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
