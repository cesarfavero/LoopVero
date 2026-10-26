# `executeStateUpdate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/split-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771686-771690](../../../../../../../../reference/runtime/host-main.cjs#L771686-L771690) | `FunctionDeclaration` | sim | `ctx, args, deps` |
| [evaluation:570919-570923](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570919-L570923) | `FunctionDeclaration` | sim | `ctx, args, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771686-771690](../../../../../../../../reference/runtime/host-main.cjs#L771686-L771690) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:570919-570923](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570919-L570923) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:771686

Chamadas escritas diretamente neste corpo: `applySandStateUpdate`, `ctx.get`, `deps.assertNoPendingAutoReviewApproval`.

SHA-256 do trecho: `b386128ba643e49df947a7131b39c916a7e69ce1503da41abd6b7ffed8fe5877`.

### evaluation:570919

Chamadas escritas diretamente neste corpo: `applySandStateUpdate`, `ctx.get`, `deps.assertNoPendingAutoReviewApproval`.

SHA-256 do trecho: `b386128ba643e49df947a7131b39c916a7e69ce1503da41abd6b7ffed8fe5877`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
