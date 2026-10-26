# `partsOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/secure-values/user-form-vault-kinds.ts` · [README do módulo](../../../../../../modules/core/runner/secure-values/user-form-vault-kinds-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724697-724706](../../../../../../../reference/runtime/host-main.cjs#L724697-L724706) | `FunctionDeclaration` | não | `kind, allowed, parts` |
| [evaluation:560256-560265](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560256-L560265) | `FunctionDeclaration` | não | `kind, allowed, parts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724697-724706](../../../../../../../reference/runtime/host-main.cjs#L724697-L724706) | 2 | 0 | 0 | 2 | 1 | 0 |
| [evaluation:560256-560265](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560256-L560265) | 2 | 0 | 0 | 2 | 1 | 0 |

### host:724697

Chamadas escritas diretamente neste corpo: `.join`, `JSON.stringify`, `allowed.filter`, `allowed.map`, `new SandToolInputError`, `parts.find`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `685d73390bf572253fd9a694912065db517808c09c75c98ca660f363be09ff72`.

### evaluation:560256

Chamadas escritas diretamente neste corpo: `.join`, `JSON.stringify`, `allowed.filter`, `allowed.map`, `new SandToolInputError`, `parts.find`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `ca4605193662c4666df2c6f3aced4cbdc1202f8b202d341c2e2bf24f37038b8e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
