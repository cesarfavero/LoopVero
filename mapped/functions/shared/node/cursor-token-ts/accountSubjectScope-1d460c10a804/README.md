# `accountSubjectScope`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-token.ts` · [README do módulo](../../../../../modules/shared/node/cursor-token-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:175726-175729](../../../../../../reference/runtime/host-main.cjs#L175726-L175729) | `FunctionDeclaration` | não | `subject` |
| [evaluation:511705-511708](../../../../../../reference/runtime/sand-eval-runner.cjs#L511705-L511708) | `FunctionDeclaration` | não | `subject` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:175726-175729](../../../../../../reference/runtime/host-main.cjs#L175726-L175729) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:511705-511708](../../../../../../reference/runtime/sand-eval-runner.cjs#L511705-L511708) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:175726

Chamadas escritas diretamente neste corpo: `accountScopeOfPrincipal`.

SHA-256 do trecho: `82e6a5e0bf58b8d2ccac4effacf8d80e92ee6383483cad99d7cc38999c6c4e8d`.

### evaluation:511705

Chamadas escritas diretamente neste corpo: `accountScopeOfPrincipal`.

SHA-256 do trecho: `82e6a5e0bf58b8d2ccac4effacf8d80e92ee6383483cad99d7cc38999c6c4e8d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
