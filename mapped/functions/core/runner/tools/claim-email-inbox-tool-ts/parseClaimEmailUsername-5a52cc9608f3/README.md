# `parseClaimEmailUsername`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/claim-email-inbox-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/claim-email-inbox-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764737-764763](../../../../../../../reference/runtime/host-main.cjs#L764737-L764763) | `FunctionDeclaration` | não | `raw` |
| [evaluation:558105-558131](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558105-L558131) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764737-764763](../../../../../../../reference/runtime/host-main.cjs#L764737-L764763) | 6 | 0 | 0 | 1 | 4 | 0 |
| [evaluation:558105-558131](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558105-L558131) | 6 | 0 | 0 | 1 | 4 | 0 |

### host:764737

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `USERNAME_PATTERN.test`, `domain2.endsWith`, `new SandToolInputError`, `raw.trim`, `trimmed.lastIndexOf`, `trimmed.slice`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `3a1bdc950f470e1f16d8e2d9440fa8e24740121a0e80059a6ed518422ee6fae9`.

### evaluation:558105

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `USERNAME_PATTERN.test`, `domain2.endsWith`, `new SandToolInputError`, `raw.trim`, `trimmed.lastIndexOf`, `trimmed.slice`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `3a1bdc950f470e1f16d8e2d9440fa8e24740121a0e80059a6ed518422ee6fae9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
