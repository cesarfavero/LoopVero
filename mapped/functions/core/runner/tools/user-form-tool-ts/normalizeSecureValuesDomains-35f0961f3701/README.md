# `normalizeSecureValuesDomains`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726514-726526](../../../../../../../reference/runtime/host-main.cjs#L726514-L726526) | `FunctionDeclaration` | não | `rawDomains` |
| [evaluation:561129-561141](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561129-L561141) | `FunctionDeclaration` | não | `rawDomains` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726514-726526](../../../../../../../reference/runtime/host-main.cjs#L726514-L726526) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:561129-561141](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561129-L561141) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726514

Chamadas escritas diretamente neste corpo: `new Set`, `rawDomains.map`.

SHA-256 do trecho: `cc75962f7ac258be7dfa8675ca7f1c6e86750b40c644a30038ddc32e5797d635`.

### evaluation:561129

Chamadas escritas diretamente neste corpo: `new Set`, `rawDomains.map`.

SHA-256 do trecho: `cc75962f7ac258be7dfa8675ca7f1c6e86750b40c644a30038ddc32e5797d635`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
