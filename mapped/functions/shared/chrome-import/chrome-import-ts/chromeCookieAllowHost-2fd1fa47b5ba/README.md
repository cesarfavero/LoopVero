# `chromeCookieAllowHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/chrome-import/chrome-import.ts` · [README do módulo](../../../../../modules/shared/chrome-import/chrome-import-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485811-485813](../../../../../../reference/runtime/host-main.cjs#L485811-L485813) | `FunctionDeclaration` | não | `domain2` |
| [evaluation:574548-574550](../../../../../../reference/runtime/sand-eval-runner.cjs#L574548-L574550) | `FunctionDeclaration` | não | `domain2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485811-485813](../../../../../../reference/runtime/host-main.cjs#L485811-L485813) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574548-574550](../../../../../../reference/runtime/sand-eval-runner.cjs#L574548-L574550) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485811

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `domain2.replace`.

SHA-256 do trecho: `73e55eec2b3bf74485193751387a586e426910bace453545d4c3f978339762a4`.

### evaluation:574548

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `domain2.replace`.

SHA-256 do trecho: `73e55eec2b3bf74485193751387a586e426910bace453545d4c3f978339762a4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
