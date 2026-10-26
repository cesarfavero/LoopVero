# `sandAppHomeDocumentFromArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-app-home-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-app-home-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771025-771035](../../../../../../../reference/runtime/host-main.cjs#L771025-L771035) | `FunctionDeclaration` | não | `args` |
| [evaluation:570131-570141](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570131-L570141) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771025-771035](../../../../../../../reference/runtime/host-main.cjs#L771025-L771035) | 3 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:570131-570141](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570131-L570141) | 3 | 0 | 0 | 1 | 1 | 0 |

### host:771025

Chamadas escritas diretamente neste corpo: `new SandToolInputError`, `parseSandAppHomeDocument`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `f28648f80a01c21c6766068a2e54ce0692946a61e30f0b669798c653e2ffbc6d`.

### evaluation:570131

Chamadas escritas diretamente neste corpo: `new SandToolInputError`, `parseSandAppHomeDocument`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `0f30524aed47fddd69217c4b61647964b0cc8a2240c2c27dd1a9a1ee9bb31996`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
